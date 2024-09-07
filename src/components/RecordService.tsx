import { recordService } from "@/constant/data";
import { useTimer } from "@/hooks/useTime";

const RecordService = () => {
  const numPart = recordService.map((record) =>
    Math.ceil(Number(record.numberOfAmount.split("%")[0]))
  );

  const { counters } = useTimer(numPart);

  return (
    <div className="bg-[#EDF5FD] px-10 xl:px-0 py-5">
      <div className="max-w-6xl mx-auto px-5 xl:px-0 flex flex-wrap items-center justify-center gap-5">
        {recordService.map((record, index) => {
          const { title, subTitle } = record;

          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay={(index + 1) * 100}
              className="bg-white rounded-xl shadow-inner drop-shadow-xl border-2 border-white py-5 px-10 flex flex-col items-center justify-center"
            >
              <p className="text-4xl font-bold pb-3 text-blue-700">
                {index === 0 ? `${counters[index]}%` : counters[index]}
              </p>
              <p className="text-md text-slate-700 font-semibold">{title}</p>
              <p className="text-sm text-slate-500 font-semibold">{subTitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecordService;
