import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function RegistrationInput(props) {
  return (
    <div>
        <div className="grid gap-2">
            <Label htmlFor={props.name}>{props.label}</Label>
            <Input
              onChange={props.onChanged}
              autoComplete={props.name}
              name={props.name}
              type={props.type}
              placeholder={props.placeholder}
            />
        </div>
    </div>
  )
}

export default RegistrationInput