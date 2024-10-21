"use client";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch } from "../../store/hooks";
import { userLoggedIn } from "../../store/features/auth/authSlice";
import { SyntheticEvent, useState } from "react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState("");

  async function onSubmit(event: SyntheticEvent) {
    console.log("submit");
    event.preventDefault();
    dispatch(userLoggedIn({ userName }));
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="name"
              placeholder="name@example.com"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <Button>Sign In with Email</Button>
        </div>
      </form>
    </div>
  );
}
