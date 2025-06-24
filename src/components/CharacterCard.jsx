import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

export default function CharacterCard({ id, name, bounty, crew, imageUrl }) {
  const { t } = useI18n();

  return (
    <Link to={`/character/${id}`} className="group">
      <div className="bg-[#fdf3d8] text-[#3e2c1c] border-[6px] border-[#af895c] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 font-wanted cursor-pointer
        h-full md:h-[500px] flex flex-col relative overflow-hidden transform group-hover:rotate-1 group-hover:shadow-xl"
      >
        {/* Efeito de papel envelhecido */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-paper.png')] opacity-20"></div>
        
        {/* Cabeçalho */}
        <div className="bg-[#a12c2f] px-4 py-2 text-center text-3xl font-extrabold tracking-widest border-b-[6px] border-[#af895c] text-[#f3e5ab] relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#8d1f22]"></div>
          WANTED
          <div className="absolute top-0 left-0 right-0 h-4 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10"></div>
        </div>

        {/* Texto DEAD OR ALIVE */}
        <div className="text-center py-1 bg-[#e6d1a9] border-b-[6px] border-[#af895c]">
          <p className="text-xl font-bold italic text-[#a12c2f]">DEAD OR ALIVE?</p>
        </div>

        {imageUrl && (
          <div className="relative overflow-hidden border-b-[6px] border-[#af895c]">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-60 object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
            {/* Efeito de polaroide na foto */}
            <div className="absolute inset-0 border-8 border-white/30 pointer-events-none"></div>
          </div>
        )}

        <div className="p-4 flex flex-col justify-between flex-1 relative z-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-[#a12c2f] mb-2 line-clamp-2 font-wanted">
              {name}
            </h2>

            {/* Chaves decorativas */}
            <div className="flex justify-center items-center my-2">
              <span className="text-4xl text-[#af895c] font-wanted">{'{'}</span>
              <div className="mx-2 border-t-2 border-b-2 border-[#af895c] py-2 px-4">
                <p className="text-lg font-semibold text-[#6b3e26] mb-1">
                  {t("character.bounty")}: <br />
                  <span className="text-3xl text-[#a12c2f] font-wanted">฿ {bounty.toLocaleString("en-US")}</span>
                </p>
              </div>
              <span className="text-4xl text-[#af895c] font-wanted">{'}'}</span>
            </div>

            <p className="italic text-sm text-[#4b2e2e] mt-2">
              {t("character.crew")}: <span className="font-bold">{crew}</span>
            </p>
          </div>
        </div>

        {/* Selo dos Marines */}
        <div className="absolute bottom-2 right-2 w-12 h-12 bg-[#a12c2f] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
          MARINE
        </div>
        
        {/* Marcas de prego nos cantos */}
        <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-[#af895c]"></div>
        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#af895c]"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 rounded-full bg-[#af895c]"></div>
      </div>
    </Link>
  );
}