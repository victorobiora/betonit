
const SportsSnippetItem: React.FC<{
  name: string,
  updateSection: (name:string)=> void,
  sportClass: (name:string) => string 
}> = ({ name, updateSection, sportClass }) => {

const updateSect = () => {
    updateSection(name)
}

  return (
    <li className={sportClass(name)} onClick={updateSect}>
      <p>{name}</p>
    </li>
  );
};

export default SportsSnippetItem;
