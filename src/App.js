import React from "react";
import {useState} from "react";

export default function Form() {
    const [keys, setKeys] = useState({
        key1: 'Barbara',
        key2: 'Hepworth',
        key3: 'bhepworth@react.com',
        key4: 'love cats',
    })

    function handleKeys(event, key) {
        switch (key) {
            case 1:
                setKeys({...keys, key1: event.target.value})
                break
            case 2:
                setKeys({...keys, key2: event.target.value})
                break
            case 3:
                setKeys({...keys, key3: event.target.value})
                break
            case 4:
                setKeys({...keys, key4: event.target.value})
                break
        }
    }

    return(
        <div style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#313866"
        }}>
            <div>
                <div className="input" style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "350px",
                    padding: "5px 14px 14px 14px",
                    borderRadius: "10px",
                    boxShadow: "12px 12px 2px 1px #2f2559",
                    margin: "20px auto",

                    backgroundColor: "#504099",
                    color: "white"
                }}>
                    <label htmlFor="">
                        key 1
                        <input style={{width: "97.5%"}} type="text" value={keys.key1} onChange={e => handleKeys(e, 1)}/>
                    </label>
                    <label htmlFor="">
                        key 2
                        <input style={{width: "97.5%"}} type="text" value={keys.key2} onChange={e => handleKeys(e, 2)}/>
                    </label>
                    <label htmlFor="">
                        key 3
                        <input style={{width: "97.5%"}} type="text" value={keys.key3} onChange={e => handleKeys(e, 3)}/>
                    </label>
                    <label htmlFor="">
                        key 4
                        <input style={{width: "97.5%"}} type="text" value={keys.key4} onChange={e => handleKeys(e, 4)}/>
                    </label>
                </div>

                <div className="output" style={{
                    width: "400px",
                    margin: "10px auto",
                    padding: "5px 14px 14px 14px",
                    borderRadius: "10px",
                    boxShadow: "12px 12px 2px 1px #2f2559",

                    backgroundColor: "#504099",
                    color: "white"
                }}>
                    <h2>{keys.key1}</h2>
                    <h2>{keys.key2}</h2>
                    <h2>{keys.key3}</h2>
                    <h2>{keys.key4}</h2>
                </div>
            </div>
        </div>
    )
}