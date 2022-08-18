import Image from "next/image";
import React from "react";
import { Container } from "../Container";
const AboutProjects = () => {
  return (
    <section>
      <div className="relative  h-[400px]">
        <Image src="/images/aboutPrjects.jpg" layout="fill" objectFit="cover" />
        <div className=" absolute  flex justify-center items-center h-full w-full">
          <Container>
            <div className=" flex md:flex-row flex-col-reverse  justify-center gap-4 items-center  ">
              <div className=" md:translate-y-8 hidden md:block  flex-shrink-0 ">
                <Image
                  src="/placeHolder/student.png"
                  width={300}
                  height={350}
                  objectFit="fill"
                />
              </div>
              <div className="text-white md:w-[600px]   ">
                <h1 className="font-bold text-xl mb-5">
                  المشاريع التي نعمل عليها
                </h1>
                <p>
                  لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                  أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                  ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                  سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                  كونسيكيوات . ديواس أيوتي أريري دولار إن ريبريهينديرأيت
                  فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت نيولا
                  باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون
                  بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم
                  أيدي ايست لابوريوم.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default AboutProjects;
