
const SportsSnippetItem: React.FC<{
  nameObject: { name: string, id: string},
  updateSection: (name:string)=> void,
  sportClass: (name:string) => string;
  updateLeagueData: (parameter: string) => void
}> = ({ nameObject, updateSection, sportClass, updateLeagueData }) => {

const updateSect = () => {
    updateSection(nameObject.name)
    updateLeagueData(nameObject.id)

}

  return (
    <li className={sportClass(nameObject.name)} onClick={updateSect}>
      <p>{nameObject.name}</p>
    </li>
  );
};

export default SportsSnippetItem;
