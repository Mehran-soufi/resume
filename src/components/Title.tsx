interface TitleProps {
  title: string;
  description: string;
}

const Title: React.FC<TitleProps> = ({ title, description }) => {
  return (
    <div className="w-full my-10 flex flex-col justify-center items-start">
      <h2 className="w-full justify-start items-center lg:text-2xl text-xl font-bold text-emerald-700">
        <span className="text-white"> &#8626; </span>
        {title}
        <span className="lg:text-lg text-base text-white"> من </span>
      </h2>
      <p className="text-slate-300 md:text-base text-sm">{description}</p>
    </div>
  );
};

export default Title;
