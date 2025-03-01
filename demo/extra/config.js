export default {
  globalStyles: {
    maxHeight: '300px'
  },
  commands: {
    echo: {
      description: 'Echoes a passed string.',
      usage: 'echo <string>',
      fn: function () {
        return `${Array.from(arguments).join(' ')}`
      }
    },
    danger: {
      description: 'This command returns HTML. It will only work with terminals that have danger mode enabled.',
      fn: () => 'I can<br/>use HTML in this<br/>and it will be parsed'
    },
    async: {
      description: 'This command runs an asynchronous task.',
      fn: async () => {
        const asyncTask = async () => 'Hello from a promise!'
        const result = await asyncTask()
        return result
      }
    },
    delay: {
      description: 'Delays return of value by 1000 ms.',
      fn: () => {
        return new Promise(resolve => {
          setTimeout(() => resolve('Finished!'), 1000)
        })
      }
    }
  },
  casingCommands: {
    CaSeMatTeRs: {
      description: 'In terminals with case-insensitive matching, this command can be executed regardless of whether the casing is correct.',
      fn: () => 'This command is called "CaSeMatTeRs", but in case-insensitive terminals it can also be called with "casematters"!'
    }
  },
  autocomplete: (input) => {
    const commandsList = ['echo', 'danger', 'async', 'delay', 'help', 'clear']
    const currentValue = input.value
    const completionValue = commandsList.filter(key => key.startsWith(currentValue))

    if (completionValue && completionValue.length === 1) {
      input.value = completionValue[0]
    }
  }
}
