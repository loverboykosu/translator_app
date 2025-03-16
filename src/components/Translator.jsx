const Translator = () => {
  return (
    <>
      <h1 className="bg-gray-800 text-white text-center p-3">Translator App</h1>
      <div className="flex flex-row">
        {/* オリジナル言語 */}
        <div className="origin basis-1/2 text-center m-3">
          <h2 className="border-2 border-solid m-3">翻訳対象</h2>
          <textarea
            className="border-2 border-solid"
            name="postContent"
            rows={4}
            cols={40}
          />
        </div>
        {/* 翻訳後 */}
        <div className="origin basis-1/2 text-center m-3">
          <h2 className="border-2 border-solid m-3">翻訳結果</h2>
          <textarea
            className="border-2 border-solid"
            name="postContent"
            rows={4}
            cols={40}
          />
        </div>
      </div>
    </>
  );
};
export default Translator;
