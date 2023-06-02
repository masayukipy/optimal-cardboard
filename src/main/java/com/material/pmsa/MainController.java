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
	public @ResponseBody Cardboard selectOptimalBoard (
		@RequestParam(required = true) Float length,
		@RequestParam(required = true) Float width,
		@RequestParam(required = true) Float height,
		@RequestParam(required = true) Float weight,
		@RequestParam(required = true) Float gap
	) {
		Iterable<Cardboard> allCardboards = cardBoardRepository.findAll();

		for (Cardboard cardboard : allCardboards) {
			Integer count = 0;
			if (cardboard.lengthOuter == null || cardboard.widthOuter == null || cardboard.heightOuter == null || cardboard.weight == null) {
				continue;
			}
			if (cardboard.lengthOuter > length * 10 + gap * 2 * 10) {
				count ++;
			}
			if (cardboard.widthOuter > width * 10 + gap * 2 * 10) {
				count ++;
			}
			if (cardboard.heightOuter > height * 10 + gap * 2 * 10) {
				count ++;
			}
			if (cardboard.weight > weight) {
				count ++;
			}
			if(count == 4) {
				// String jsonString = null;
				// try {
				// 	jsonString = objectMapper.writeValueAsString(allCardboards);
				// } catch(JsonProcessingException e) {
				// 	e.printStackTrace();
				// }
				return cardboard;
			}
		}
		return null;
	}
}
