package com.material.pmsa;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.material.pmsa.cardboard.Cardboard;
import com.material.pmsa.cardboard.CardboardRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.ui.ModelMap;


@Controller
public class MainController {
    
    @Autowired
    private CardboardRepository cardBoardRepository;

	@GetMapping("/")
	public String index(ModelMap model) {
        model.addAttribute("message", "Greetings from Spring Boot!");
		return "home/index";
	}

	@GetMapping("/admin")
	public String admin(ModelMap model) {
		Iterable<Cardboard> allCardboards = cardBoardRepository.findAll();
		// ObjectMapper objectMapper = new ObjectMapper();
		// String jsonString = null;
		// try {
		// 	jsonString = objectMapper.writeValueAsString(allCardboards);
		// } catch(JsonProcessingException e) {
		// 	e.printStackTrace();
		// }
		model.addAttribute("allCardboards", allCardboards);
		return "admin/index";
	}

	@PostMapping("/select-optimal-board")
	public @ResponseBody String selectOptimalBoard (
		@RequestParam(required = true) Float length,
		@RequestParam(required = true) Float width,
		@RequestParam(required = true) Float height,
		@RequestParam(required = true) Float weight,
		@RequestParam(required = true) Float gap
	) {
		Iterable<Cardboard> allCardboards = cardBoardRepository.findAll();
		String lengthStr = Float.toString(length);
		String widthStr = Float.toString(width);
		String heightStr = Float.toString(height);
		String weightStr = Float.toString(weight);
		String gapStr = Float.toString(gap);
		return lengthStr + widthStr + heightStr + weightStr + gapStr;
	}
}
