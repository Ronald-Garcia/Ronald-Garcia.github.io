// import TextBox from "./text-box";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutMe = () => {
    return (
        <div className="self-center py-5 w-[90%]">
            <Card>
                <CardHeader>
                    <CardTitle className="font-bold">
                        Who am I?
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-5 shrink">
                    <div>
                        <p className="text-sm font-light">
                            My name is Ronald Garcia, and I am a Cuban-American from Homestead, Florida (just south of Miami).
                            Currently an undergraduate at <a className="font-medium underline" href="https://www.jhu.edu/" target="_blank">Johns Hopkins University</a> in the class of 2026. 
                            My majors are Mechanical Engineering, Computer Engineering, Electrical Engineering, and Computer Science.
                        </p>
                        <br></br>
                    </div>
                    <div>
                        <p className="font-bold">
                            What I do
                        </p>
                        <p className="text-sm font-light">
                            I love to do yoga! My interest started when the COVID-19 pandemic trapped me in my home. After a health scare, I realized that I needed to make time for myself, whether it be academic, physical, or mental.

                            As a FLI member, I love to give back to my community! Whether it be through tutoring, mentoring, or food distributions, I am always willing to lend a helping hand!
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default AboutMe;