export default function OutputSection({
  outputImage,
  learningImage,
  outputTitle,
  learningTitle,
  outputTitleColor = '#4B63FF',
  learningTitleColor = '#4B63FF',
}) {
  return (
    <section className="bg-white px-6 pt-6 pb-20 lg:px-20">

      {/* OUTPUT SECTION */}
      {(outputTitle || outputImage) && (
        <div className="flex flex-col items-center">

          {outputTitle && (
            <div className="text-center">
              <h2
                className="text-4xl font-extrabold lg:text-5xl"
                style={{ color: outputTitleColor }}
              >
                {outputTitle}
              </h2>
            </div>
          )}

          {outputImage && (
            <div className="mt-8 flex justify-center w-full">
              <img
                src={outputImage}
                alt="Output"
                className="w-full max-w-[1500px] object-contain scale-110"
              />
            </div>
          )}
        </div>
      )}

      {/* KEY LEARNING SECTION */}
      {learningImage && (
        <div className="mt-16 flex flex-col items-center">

          {learningTitle && (
            <div className="text-center">
              <h2
                className="text-4xl font-extrabold lg:text-5xl"
                style={{ color: learningTitleColor }}
              >
                {learningTitle}
              </h2>
            </div>
          )}

          <div className="mt-8 flex justify-center w-full">
            <img
              src={learningImage}
              alt="Learning"
              className="w-full max-w-[1500px] object-contain scale-110"
            />
          </div>
        </div>
      )}
    </section>
  );
}