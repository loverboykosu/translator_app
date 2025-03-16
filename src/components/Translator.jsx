import { useState } from "react";
const Translator = () => {
  const [hasOriginWord, setHasOriginWord] = useState(false);
  const [originWord, setOriginWord] = useState("");
  const getText = (e) => {
    setOriginWord(e.target.value);
    setHasOriginWord(true);
  };
  return (
    <>
      <h1 className="bg-gray-800 text-white text-center p-3">Translator App</h1>
      <div className="flex flex-row">
        {/* オリジナル言語 */}
        <div className="origin basis-1/2 text-center m-3">
          <h2 className="border-2 border-solid m-3 rounded">翻訳対象</h2>
          <textarea
            className="border-1 border-solid w-md min-h-80"
            name=""
            id=""
            placeholder="翻訳したい文章を入力してください"
            onChange={getText}
          ></textarea>
        </div>
        {/* 翻訳後 */}
        <div className="origin basis-1/2 m-3">
          <h2 className="border-2 border-solid m-3 text-center rounded">
            翻訳結果
          </h2>
          <div className="border-1 border-solid w-md min-h-80 ">
            {hasOriginWord && originWord}
          </div>
        </div>
      </div>
    </>
  );
};
export default Translator;
