import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description:
            "Classes that focus on developing strength and muscle tone. We have a variety of classes to choose from. We offer classes for all levels.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description:
            "Classes that focus on mental stabilization and relaxation. We have a variety of classes to choose from. We offer classes for all levels.",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        image: image3,
    },
    {
        name: "Adventure Classes",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description:
            "Classes that focus on HIT fitness and cardio. We have a variety of classes to choose from. We offer classes for all levels.",
        image: image5,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
};

const OurClasses = ({setSelectedPage}: Props) => {
    return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}            
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">Our Classes are a great way to get in shape. We offer multiple classes to choose from. Here are the pictures of our classes:</p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
    );
};

export default OurClasses;