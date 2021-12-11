export default function FilterBox({ items, setFilterParam, label }) {
  return (
    <select
      onChange={(e) => setFilterParam(e.target.value)}
      className="block w-40 text-white bg-primary opacity-70 py-1.5 px-3 border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-secondaryfocus:border-secondary"
    >
      <option value="">{label}</option>
      {items.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </select>
  );
}
