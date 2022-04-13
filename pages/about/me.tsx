import Link from "next/link";

type Props = {};

const aboutMe = (props: Props) => {
     return (
          <h1
               style={{
                    margin: "auto",
                    textAlign: "center",
                    height: "100vh",
                    justifyItems: "center",
                    verticalAlign: "center",
               }}>
               <Link href={"/"}>
                    <a>This is the About me Page</a>
               </Link>
          </h1>
     );
};

export default aboutMe;
