import svgList from '@/styles/svgList';
import classes from './ErrorComponent.module.css'


const ErrorComponent: React.FC<{
    errMessage: string
}> = ({errMessage}) => {
    return <section className={classes.errorContainer}>
            <div className={classes.svg_football}>
                {svgList.errorsvg}
            </div>
            <div className={classes.error_message}>{errMessage}</div>
    </section>
}


export default ErrorComponent;