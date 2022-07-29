import React from "react";
import {Table} from "reactstrap"

function Details(props) {
  return (
    <div className="mt-5">
      <img src={props.cardObject.recipe.image} alt="" />
      <h5 className="mb-3">{props.cardObject.recipe.label}</h5>
      
          <Table dark>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Menu Description</th>
                <th>Quantity</th>
                <th>Measure</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
                {
                    props.cardObject.recipe.ingredients.map((menu,ind)=>{
                        return(
                            <tr>
                                <th scope="row">{ind+1}</th>
                                <td>
                                <img width="60" src={menu.image}/>
                                </td>
                                <td>{menu.text}</td>
                                <td>{menu.quantity}</td>
                                <td>{menu.measure}</td>
                                <td>{menu.weight.toFixed(2)}</td>


                            </tr>
                        )

                    })
                }
              
            </tbody>
          </Table>
    </div>
  );
}

export default Details;
