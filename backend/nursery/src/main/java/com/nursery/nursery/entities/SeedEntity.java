package com.nursery.nursery.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;




@Entity
@Table(name = "seeds")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class SeedEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    String name;
    String category;
    Float cost;
}
