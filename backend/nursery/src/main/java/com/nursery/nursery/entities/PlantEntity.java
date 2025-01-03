package com.nursery.nursery.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;




@Entity
@Table(name = "plant")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class PlantEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    String name;
    String category;
    Float cost;
}
