package stepDefinations;

import java.io.IOException;

import io.cucumber.java.Before;

public class Hooks {
	
	@Before("@Deleteplace")
	public void beforeScenario() throws IOException {
	
		StepDefination m=new StepDefination();
		//The static field StepDefination.place_id should be accessed in a static way,As Place_id variable is static,its calling using className
		if(StepDefination.place_id==null) {
		
	    m.add_Place_Payload_with("sai", "Telugu", "Vatluru");
		m.user_calls_with_http_request("AddPlaceAPI", "POST");
		m.verify_place_Id_created_maps_to_using("sai", "getPlaceAPI");
		
		}
	}
	

}
