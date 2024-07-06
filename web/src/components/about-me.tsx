import TextBox from "./text-box";

const AboutMe = () => {
    return (
        <div>
            <TextBox>
                <h1 className="text-2xl font-bold italic ">Who am I?</h1>
                <p>
                    My name is Ronald Garcia, and I am  a Cuban-American from Homestead, Florida (just south of Miami).
                    Currently an undergraduate at <a className="font-bold underline" href="https://www.jhu.edu/" target="_blank">Johns Hopkins University</a> in the class of 2026.
                </p>
            </TextBox>

        </div>
    );
}

export default AboutMe;