package com.material.pmsa;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.ui.ModelMap;


@Controller
public class MainController {
    
	@GetMapping("/")
	public String index(ModelMap model) {
        model.addAttribute("message", "Greetings from Spring Boot!");
		return "home/index";
	}

	@GetMapping("/admin")
	public String admin(ModelMap model) {
		return "admin/index";
	}
}
