import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className='py-5'>
            <div className="container">
                <Title title='Our Story'/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad dolore reiciendis dolor, provident commodi excepturi deserunt incidunt nostrum explicabo. Voluptatum, beatae nobis consequuntur quisquam eos sunt doloribus dignissimos reiciendis ratione quam rerum voluptatem, facilis delectus non esse laboriosam quia tempore omnis odit quasi corrupti ex. Iusto officia itaque deleniti?
                        </p>
                        <Link to='/about'>
                            <button className="btn text-uppercase btn-yellow">
                                about page
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
