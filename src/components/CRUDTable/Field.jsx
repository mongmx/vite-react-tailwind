export const Field = ({ name, label, hidden, data }) => {
  return (
    <>
      {!hidden &&
        <label className="block">
          <span className="text-gray-700 uppercase">{label}</span>
          <input type="text" name={name} defaultValue={data ? data[name] : ''} className="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-blue-500" />
        </label>
      }
    </>
  );
}

export const TextField = ({ name, label, hidden, data }) => {
  return (
    <>
      {!hidden &&
        <label className="block">
          <span className="text-gray-700 uppercase">{label}</span>
          <textarea name={name} defaultValue={data ? data[name] : ''} className="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-blue-500" />
        </label>
      }
    </>
  );
}
