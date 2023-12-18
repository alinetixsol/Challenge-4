/* eslint-disable react/prop-types */
import Card from "./Card"

const Cards = ({ products }) => {
    return (
        <div className="flex justify-center flex-wrap gap-6 items-center">
            {
                products.map((item) => {
                    return (
                        <Card key={item.id} item={item} />
                    )
                })
            }
        </div>
    )
}

export default Cards