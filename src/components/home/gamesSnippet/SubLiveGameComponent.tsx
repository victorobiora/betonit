
import LiveGameItem from './LiveGameItem';
import classes from './SubLiveGameComponent.module.css'


const SubGameLiveComponent: React.FC = (props) => {
  return (
    <li className={classes.item_container}>
      <div>
        <h4>International Games</h4>
        <div className={classes.threeway}>
          <p  className={classes.pHeader}>3 Way</p>
          <div>
            <div>1</div>
            <div>X</div>
            <div>2</div>
          </div>
        </div>
        <div className={classes.next_goals}>
          <p className={classes.pHeader}>Next Goals</p>
          <div>
            <div>1</div>
            <div>No Goal</div>
            <div>2</div>
          </div>
        </div>
      </div>
 <LiveGameItem/>
 <LiveGameItem/>
 <LiveGameItem/>
    </li>
  );
};


export default SubGameLiveComponent