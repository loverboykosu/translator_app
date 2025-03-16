const Translator = () => {
  return (
    <>
      <h1 className="bg-gray-800 text-white text-center p-3">Translator App</h1>
      <div className="flex flex-row">
        {/* オリジナル言語 */}
        <div className="origin basis-1/2 text-center border-2 border-solid m-3">
          <h2>翻訳対象</h2>
        </div>
        {/* 翻訳後 */}
        <div className="translated basis-1/2 text-center border-2 border-solid m-3">
          <h2>翻訳結果</h2>
        </div>
      </div>
    </>
  );
};
export default Translator;
