import { Envelope } from "phosphor-react";
import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import "./styles/global.css";

function App() {
  return (
    <div className="w-full h-[100vh] bg-zinc-900 flex items-center justify-center">
      <div
        className="flex items-center justify-center flex-col mx-auto my-0
      max-w-[500px] w-full bg-zinc-700 p-4 gap-2 rounded"
      >
        <Heading children="Ignite Lab" size="lg" />
        <Text
          children="Faça login e começe a usar"
          size="lg"
          className="block mb-2 "
        />
        <div className="mb-2">
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </div>
        <Button children="Button view" />
      </div>
    </div>
  );
}

export default App;
