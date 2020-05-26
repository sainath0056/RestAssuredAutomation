package cucumber.Options;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)//if u develop any second feauture file then give src/test/java/features/newfeaturefile1
@CucumberOptions(features="src/test/java/features",plugin= {"pretty","html:target/cucumber-html-report","json:target/jsonReports/cucumber-report.json"},glue= {"stepDefinations"})

public class TestRunner {
//tags= {"@Addplace"}
}
