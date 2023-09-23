import { create } from "zustand";

interface Store {
  step: number;
  increaseStep: () => void;
  decreaseStep: () => void;
  resetStep: () => void;

  inputValue: string;
  setInputValue: (value: string) => void;

  handling: boolean;
  setHandling: (value: boolean) => void;

  handlingMessage: string;

  post: string;
  setPost: (value: string) => void;

  generatePostHandler: () => void;
}

export const useStore = create<Store>((set, get) => ({
  step: 0,
  increaseStep: () => set((state) => ({ step: state.step + 1 })),
  decreaseStep: () => set((state) => ({ step: state.step - 1 })),
  resetStep: () => set({ step: 0 }),

  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),

  handling: false,
  setHandling: (value) => set({ handling: value }),

  handlingMessage: "Generating post",

  post: "",
  setPost: (value) => set({ post: value }),

  generatePostHandler: async () => {
    const { handling, increaseStep, setHandling, setPost, inputValue } = get();
    // Early Returns
    if (handling) return;

    increaseStep();
    setPost("");
    setHandling(true);

    // Generate Post
    try {
      console.log("inputValue", inputValue);
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          request: {
            idea: inputValue,
          },
        }),
      });

      if (!response.ok) {
        console.log("Response not ok", response);
        throw new Error(response.statusText);
      }

      // This data is a ReadableStream
      const data = response.body;
      if (!data) {
        console.log("No data from response.", data);
        throw new Error("No data from response.");
      }

      const reader = data.getReader();
      const decoder = new TextDecoder();
      let done = false;

      // Stop Handling
      setHandling(false);
      while (!done) {
        console.log("Reading...");
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        // Set Post

        set((state) => ({ post: state.post + chunkValue }));
      }
    } catch (error: any) {
      console.log(error);
      // set(postErrorAtom, error.message);
    }
  },
}));
