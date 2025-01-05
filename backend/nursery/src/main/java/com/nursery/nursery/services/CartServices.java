package com.nursery.nursery.services;


import com.nursery.nursery.dto.CartDTO;
import com.nursery.nursery.entities.CartEntity;
import com.nursery.nursery.repositories.CartRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class CartServices {
    final private CartRepository cartRepository;
    final private ModelMapper modelMapper;

    public CartServices(CartRepository cartRepository, ModelMapper modelMapper) {
        this.cartRepository = cartRepository;
        this.modelMapper = modelMapper;
    }

    public List<CartDTO> getAllCarts() {
        List<CartEntity> cartEntities= cartRepository.findAll();
        return cartEntities
                .stream()
                .map(cartEntity -> modelMapper.map(cartEntity,CartDTO.class))
                .collect(Collectors.toList());
    }


    public Boolean postCart(CartDTO inputCart) {
        CartEntity toSaveEntity=modelMapper.map(inputCart,CartEntity.class);
        cartRepository.save(toSaveEntity);
        return true;
    }

    public boolean deleteCartById(Long cartId){
        boolean exists=cartRepository.existsById(cartId);
        if(!exists)return false;
        cartRepository.deleteById(cartId);
        return true;
    }

    public CartDTO partiallyUpdateCartById(Long cartId, Map<String, Object> updates) {
        // Check if the seed exists
        boolean exists = cartRepository.existsById(cartId);
        if (!exists) {
            return null;
        }

        // Retrieve the seed entity
        CartEntity cartEntity = cartRepository.findById(cartId).get();

        // Handle the 'cost' field update explicitly
        if (updates.containsKey("cost")) {
            Object costValue = updates.get("cost");
            if (costValue instanceof Number) {
                cartEntity.setCost(((Number) costValue).floatValue());
                updates.remove("cost"); // Avoid duplicate updates in the reflection block
            } else {
                throw new IllegalArgumentException("Invalid data type for cost");
            }
        }
        updates.forEach((field, value) -> {
            Field fieldToBeUpdated = ReflectionUtils.findField(CartEntity.class, field);
            if (fieldToBeUpdated != null) {
                fieldToBeUpdated.setAccessible(true);
                ReflectionUtils.setField(fieldToBeUpdated, cartEntity, value);
            }
        });

        // Save the updated entity and map to DTO
        return modelMapper.map(cartRepository.save(cartEntity), CartDTO.class);
    }


}
