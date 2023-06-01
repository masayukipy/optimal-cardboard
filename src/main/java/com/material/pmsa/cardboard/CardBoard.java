package com.material.pmsa.cardboard;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity // This tells Hibernate to make a table out of this class
public class CardBoard {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    
    @Column(nullable = true)
    private String companySize;
    
    @Column(nullable = true)
    private Integer shippingSize;
    
    @Column(nullable = true)
    private Integer cardboardNo;
    
    @Column(nullable = true)
    private String cardboardType;
    
    @Column(nullable = true)
    private Integer lengthOuter;
    
    @Column(nullable = true)
    private Integer widthOuter;
    
    @Column(nullable = true)
    private Integer heightOuter;
    
    @Column(nullable = true)
    private Integer dimensionalWeight;
    
    @Column(nullable = true)
    private String remark;

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
