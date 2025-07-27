'use client';
import Image from "next/image";
import { useState } from 'react';


export default function Home() {

  const [selectedRadioChoice, setSelectedRadioChoice] = useState<string>('person');

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioChoice(e.target.value);
  };

  return (
    <div className="font-montserrat flex flex-col min-h-screen relative">
      <header className="w-full justify-between items-center flex border-b-2 border-grey px-4 sm:px-10 lg:px-[240px] py-6 mb-12">
        <Image
          className="w-[167px] h-[32px]"
          aria-hidden
          src="/logo.png"
          alt="Logo Capsens"
          width={167}
          height={32}
        />
        <div className="flex items-center">
          <Image
            className="w-[30px] h-[30px] mr-4"
            aria-hidden
            src="/user_icon.png"
            alt="User avatar"
            width={30}
            height={30}
          />
          <div className="flex flex-col">
            <span className="font-medium text-black">Jean Dupont</span>
            <span className="text-black">1 000 €</span>
          </div>
        </div>
      </header>

      <main className="flex self-center mx-auto w-full max-w-[1200px] rounded-lg border border-primary p-12 flex-col gap-12 bg-white">
        <div>
          <h1 className="font-semibold text-[39px] leading-[54px] mb-4 tracking-tighter text-black">Je crée mon compte <span className="text-primary">en tant que ...</span></h1>
          <span className="font-normal text-[16px] leading-[24px] text-black">Choisissez dès maintenant si vous souhaitez investir en tant que particulier ou en tant que personne morale.</span>
        </div>
        <div>
          <div>
            <label className={`flex flex-wrap justify-center sm:justify-normal items-center cursor-pointer border rounded-lg p-6 hover:bg-lightGrey ${selectedRadioChoice === 'person' ? "radio-checked" : 'radio-simple'}`}>
              <input type="radio" id="person" name="entity" value="person" className="shrink-0 mr-6 sm:mr-12 cursor-pointer" defaultChecked onChange={handleRadioChange} />
              <Image
                className="w-[30px] h-[35px] mr-6"
                aria-hidden
                src={selectedRadioChoice === 'person' ? "/person_blue.png" : "/person.png"}
                alt="Person"
                width={30}
                height={35}
              />
              <span className="flex flex-col sm:text-left text-center">
                <span className="block font-semibold">Personne physique</span>
                <span className="font-normal block">Vous créez ce compte pour vous-même en tant qu’individu</span>
              </span>
            </label>
          </div>
          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-grey"></div>
            <span className="whitespace-nowrap text-black px-8">ou</span>
            <div className="flex-grow border-t border-grey"></div>
          </div>
          <div className="flex flex-grow flex-wrap w-full gap-5">
            {["Association", "Company", "Micro Entreprise"].map((r, i) => (
              <div className={`w-full sm:flex-1 ${i + r}`} key={i + r}>
                <label className={`flex w-full h-full flex-col items-center text-center cursor-pointer border rounded-lg p-6 hover:bg-lightGrey ${selectedRadioChoice === r ? "radio-checked" : "radio-simple"}`}>
                  <input className="mb-6" type="radio" id={r} name="entity" value={r} onChange={handleRadioChange} />
                  <Image
                    className="w-[32px] h-[32px]"
                    aria-hidden
                    src={selectedRadioChoice === r ? "/exclude_blue.png" : "/exclude.png"}
                    alt={r}
                    width={32}
                    height={32}
                  />
                  <span className="flex flex-col">
                    <span className="block font-semibold">{r}</span>
                    <span className="font-normal block">Personne morale</span>
                  </span>
                </label>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="flex items-center mt-8 px-16 py-4 bg-primary hover:bg-darkGrey focus:bg-black text-white font-semibold rounded-lg sm:w-auto w-full justify-center cursor-pointer"
          >
            Suivant
            <Image
              className="w-[19px] h-[12px] ml-4"
              aria-hidden
              src="/arrow_right.svg"
              alt="Micro-company"
              width={19}
              height={12}
            />
          </button>
        </div>
      </main>
      <footer className="relative w-full sm:h-[180px] h-20 overflow-hidden">
        <Image
          src="/small_diamond.png"
          alt="Small diamond"
          width={100}
          height={80}
          className="absolute bottom-19 right-[14%] z-10"
        />
        <Image
          src="/Wave.svg"
          alt="Wave"
          width={1600}
          height={200}
          className="absolute bottom-0 left-0 w-full h-auto z-20"
        />
        <Image
          src="/big_diamond.png"
          alt="Big diamond"
          width={138}
          height={109}
          className="absolute bottom-7 left-[13%] z-30"
        />
      </footer>
    </div>
  );
}
