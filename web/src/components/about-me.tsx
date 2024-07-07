// import TextBox from "./text-box";
import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
    return (
        <div className="self-center md:self-start py-5 px-[100px] w-[90%] lg:w-[800px]">
            <Card>
                <CardContent className="flex-initial p-5 shrink">
                    <h1 className="text-2xl font-bold italic ">Who am I?</h1>
                    <p>
                        My name is Ronald Garcia, and I am  a Cuban-American from Homestead, Florida (just south of Miami).
                        Currently an undergraduate at <a className="font-bold underline" href="https://www.jhu.edu/" target="_blank">Johns Hopkins University</a> in the class of 2026.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}

export default AboutMe;