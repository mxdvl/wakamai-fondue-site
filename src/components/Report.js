import Summary from "./report/Summary.vue";
import Tester from "./report/Tester.vue";
import Color from "./report/Color.vue";
import Variable from "./report/Variable.vue";
import Features from "./report/Features.vue";
import Charset from "./report/Charset.vue";
import Footer from "./Footer.vue";

export default {
	props: ["font"],
	components: {
		Summary,
		Tester,
		Color,
		Variable,
		Features,
		Charset,
		Footer
	}
};
