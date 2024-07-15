// import TextBox from "./text-box";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutMe = () => {
    return (
        <div className="self-center py-5 px-[100px] w-[90%]">
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
                    </div>
                    <div>
                        <p>
                            
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default AboutMe;