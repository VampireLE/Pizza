import { useEffect, useState } from "react";
import style from "./TableTest.module.scss"



function TableTest() {
    const [elementActive, setElementActive] = useState(false);

    // useEffect(() => {
    //     const outElementActive = (event) => {
    //         if (event.target !== )
    //     }
    // }, [elementActive])
    return (
        <div className={style.container}>
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Asset Name</th>
                        <th>hsdkjfhsdk</th>
                        <th>sdhkjfhdskjhfjk</th>
                        <th>soidufois</th>
                        <th>eiwuroew</th>
                        <th>ouuiqowew</th>
                        <th>qw0e0qw</th>
                        <th>qwueoids</th>
                        <th>vklcxjkd</th>
                        <th>piwoqiepq</th>
                        <th colSpan={1}></th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td>
                            <div>
                                <input type="checkbox" />
                            </div>
                        </td>
                        <td>Laptop</td>
                        <td>q312312</td>
                        <td onClick={() => setElementActive(true)}>
                            <div className={`${style.element} ${elementActive && style['element--active']}`}>qweqeqweq</div>
                        </td>
                        <td>sdfsdfs</td>
                        <td>werwws</td>
                        <td>ewr2423</td>
                        <td>324234234</td>
                        <td>2342342</td>
                        <td>2025.01.01</td>
                        <td>2025.01.01</td>
                        <td>
                            <div className={style['asset-navigation']}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <input type="checkbox" />
                            </div>
                        </td>
                        <td>Laptop</td>
                        <td>q312312</td>
                        <td>qweqeqweq</td>
                        <td>sdfsdfs</td>
                        <td>werwws</td>
                        <td>ewr2423</td>
                        <td>324234234</td>
                        <td>2342342</td>
                        <td>2025.01.01</td>
                        <td>2025.01.01</td>
                        <td>
                            <div></div>
                            <div></div>
                            <div></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <input type="checkbox" />
                            </div>
                        </td>
                        <td>Laptop</td>
                        <td>q312312</td>
                        <td>qweqeqweq</td>
                        <td>sdfsdfs</td>
                        <td>werwws</td>
                        <td>ewr2423</td>
                        <td>324234234</td>
                        <td>2342342</td>
                        <td>2025.01.01</td>
                        <td>2025.01.01</td>
                        <td>
                            <div></div>
                            <div></div>
                            <div></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <input type="checkbox" />
                            </div>
                        </td>
                        <td>Laptop</td>
                        <td>q312312</td>
                        <td>qweqeqweq</td>
                        <td>sdfsdfs</td>
                        <td>werwws</td>
                        <td>ewr2423</td>
                        <td>324234234</td>
                        <td>2342342</td>
                        <td>2025.01.01</td>
                        <td colSpan={1}>2025.01.01</td>
                        <td>
                            <div></div>
                            <div></div>
                            <div></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <input type="checkbox" />
                            </div>
                        </td>
                        <td>Laptop</td>
                        <td>q312312</td>
                        <td>qweqeqweq</td>
                        <td>sdfsdfs</td>
                        <td>werwws</td>
                        <td>ewr2423</td>
                        <td>324234234</td>
                        <td>2342342</td>
                        <td>2025.01.01</td>
                        <td>2025.01.01</td>
                        <td>
                            <div></div>
                            <div></div>
                            <div></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <input type="checkbox" />
                            </div>
                        </td>
                        <td>Laptop</td>
                        <td>q312312</td>
                        <td>qweqeqweq</td>
                        <td>sdfsdfs</td>
                        <td>werwws</td>
                        <td>ewr2423</td>
                        <td>324234234</td>
                        <td>2342342</td>
                        <td>2025.01.01</td>
                        <td>2025.01.01</td>
                        <td>
                            <div></div>
                            <div></div>
                            <div></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <input type="checkbox" />
                            </div>
                        </td>
                        <td>Laptop</td>
                        <td>q312312</td>
                        <td>qweqeqweq</td>
                        <td>sdfsdfs</td>
                        <td>werwws</td>
                        <td>ewr2423</td>
                        <td>324234234</td>
                        <td>2342342</td>
                        <td>2025.01.01</td>
                        <td>2025.01.01</td>
                        <td>
                            <div></div>
                            <div></div>
                            <div></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <input type="checkbox" />
                            </div>
                        </td>
                        <td>Laptop</td>
                        <td>q312312</td>
                        <td>qweqeqweq</td>
                        <td>sdfsdfs</td>
                        <td>werwws</td>
                        <td>ewr2423</td>
                        <td>324234234</td>
                        <td>2342342</td>
                        <td>2025.01.01</td>
                        <td>2025.01.01</td>
                        <td>
                            <div></div>
                            <div></div>
                            <div></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <input type="checkbox" />
                            </div>
                        </td>
                        <td>Laptop</td>
                        <td>q312312</td>
                        <td>qweqeqweq</td>
                        <td>sdfsdfs</td>
                        <td>werwws</td>
                        <td>ewr2423</td>
                        <td>324234234</td>
                        <td>2342342</td>
                        <td>2025.01.01</td>
                        <td>2025.01.01</td>
                        <td>
                            <div></div>
                            <div></div>
                            <div></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <input type="checkbox" />
                            </div>
                        </td>
                        <td>Laptop</td>
                        <td>q312312</td>
                        <td>qweqeqweq</td>
                        <td>sdfsdfs</td>
                        <td>werwws</td>
                        <td>ewr2423</td>
                        <td>324234234</td>
                        <td>2342342</td>
                        <td>2025.01.01</td>
                        <td>2025.01.01</td>
                        <td>
                            <div></div>
                            <div></div>
                            <div></div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default TableTest;