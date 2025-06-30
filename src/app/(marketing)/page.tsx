import Wrapper from "@/components/global/wrapper";
import TimelineDemo from "@/components/marketing/analysis";
import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";
import LanguageSupport from "@/components/marketing/lang-support";
 // import Pricing from "@/components/marketing/pricing";

const HomePage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Hero />
            <Features />
            <TimelineDemo />
            <Integration />
            <Companies />
           {/* <Pricing /> */}
            <LanguageSupport />
            <CTA />
        </Wrapper>
    )
};

export default HomePage
