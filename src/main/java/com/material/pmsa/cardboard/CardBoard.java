package com.material.pmsa.cardboard;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity // This tells Hibernate to make a table out of this class
public class Cardboard {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Integer id;
    
    @Column(nullable = true)
    public String companySize;
    
    @Column(nullable = true)
    public Integer shippingSize;
    
    @Column(nullable = true)
    public Integer cardboardNo;
    
    @Column(nullable = true)
    public String cardboardType;
    
    @Column(nullable = true)
    public Integer lengthOuter;
    
    @Column(nullable = true)
    public Integer widthOuter;
    
    @Column(nullable = true)
    public Integer heightOuter;
    
    @Column(nullable = true)
    public Integer dimensionalWeight;
    
    @Column(nullable = true)
    public String remark;

    public Integer getId() {
      return id;
    }
    public void setId(Integer id) {
      this.id = id;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Integer getDimensionalWeight() {
        return dimensionalWeight;
    }
    
    public void setDimensionalWeight(Integer dimensionalWeight) {
        this.dimensionalWeight = dimensionalWeight;
    }

    public Integer getHeightOuter() {
        return heightOuter;
    }

    public void setHeightOuter(Integer heightOuter) {
        this.heightOuter = heightOuter;
    }

    public Integer getWidthOuter() {
        return widthOuter;
    }

    public void setWidthOuter(Integer widthOuter) {
        this.widthOuter = widthOuter;
    }

    public Integer getLengthOuter() {
        return lengthOuter;
    }

    public void setLengthOuter(Integer lengthOuter) {
        this.lengthOuter = lengthOuter;
    }

    public String getCardboardType() {
        return cardboardType;
    }

    public void setCardboardType(String cardboardType) {
        this.cardboardType = cardboardType;
    }

    public Integer getCardBoardNo() {
        return cardboardNo;
    }

    public void setCardBoardNo(Integer cardboardNo) {
        this.cardboardNo = cardboardNo;
    }

    public Integer getShippingSize() {
        return shippingSize;
    }

    public void setShippingSize(Integer shippingSize) {
        this.shippingSize = shippingSize;
    }
  
    public String getCompanySize() {
      return companySize;
    }
    public void setCompanySize(String companySize) {
      this.companySize = companySize;
    }
}
