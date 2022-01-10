import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchGet8News, fetchGetNews} from "../../redux/actions/actions";
import {useParams} from "react-router-dom";


export default function NewsDetailCompounent(){
    const {newsId} = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetNews(newsId));
    }, []);
    return null;
}
