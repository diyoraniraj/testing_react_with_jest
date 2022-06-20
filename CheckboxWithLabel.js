import { useState } from 'react'

export default function CheckboxWithLabel(lableOn, lableOff) {

    const [isChecked, setIsChecked] = useState(false)

    const onChange = () => {
        setIsChecked(!isChecked)
    }

    return(
        <label>
          <input type="checkbox" checked={isChecked} onChange={onChange}>
            {isChecked ? lableOn : lableOff}
          </input>
        </label>
    )
}