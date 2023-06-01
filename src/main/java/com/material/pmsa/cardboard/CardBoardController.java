package com.material.pmsa.cardboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@ Controller
@RequestMapping(path = "/cardboard") // This means URL's start with /cardboard (after Application path)
public class CardBoardController {
    
    @Autowired
    private CardboardRepository cardBoardRepository;

    @PostMapping(path = "/add-cardboard")
    public @ResponseBody String addNewCardboard(
        @RequestParam(required = false) String companySize, 
        @RequestParam(required = false) Integer shippingSize, 
        @RequestParam(required = false) Integer cardboardNo, 
        @RequestParam(required = false) String cardboardType, 
        @RequestParam(required = false) Integer lengthOuter, 
        @RequestParam(required = false) Integer widthOuter, 
        @RequestParam(required = false) Integer heightOuter, 
        @RequestParam(required = false) Integer dimensionalWeight, 
        @RequestParam(required = false) String remark
    ) {
        Cardboard n = new Cardboard();
        n.setCompanySize(companySize);
        n.setShippingSize(shippingSize);
        n.setCardBoardNo(cardboardNo);
        n.setCardboardType(cardboardType);
        n.setLengthOuter(lengthOuter);
        n.setWidthOuter(widthOuter);
        n.setHeightOuter(heightOuter);
        n.setDimensionalWeight(dimensionalWeight);
        n.setRemark(remark);
        cardBoardRepository.save(n);
        return "abc";
    }

    @GetMapping(path = "/all-cardboard")
    public @ResponseBody Iterable<Cardboard> getAllCardboards() {
        return cardBoardRepository.findAll();
    }
}
