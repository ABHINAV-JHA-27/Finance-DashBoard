import { useGetKpisQuery } from "@/state/api";

const Row1 = () => {
    const { data } = useGetKpisQuery();
    return <div>hii</div>;
};

export default Row1;
