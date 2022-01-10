import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchGet8News} from "../../redux/actions/actions";


export default function NewsCompounent(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGet8News());
    }, []);
    return null;
}
