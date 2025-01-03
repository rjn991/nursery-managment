package com.nursery.nursery.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class SeedDTO {
    Long id;
    String name;
    String category;
    Float cost;
}
