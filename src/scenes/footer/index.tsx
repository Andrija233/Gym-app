import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                        We provide the best classes in town. Join us and let us take care of the rest.
                    </p>
                    <p>© Evogym All Rights Reserved</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Link1</p>
                    <p className="my-5">Link2</p>
                    <p className="my-5">Link3</p>
                    <p>Useful Links</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Contact</p>
                    <p className="my-5">(123)222-3333-444</p>
                </div>
            </div>
        </footer>
    )
       

    
};

export default Footer;