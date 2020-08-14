<template>
    <div class="m-3">
        <label>
            {{label}}
            <input :type="type"  v-model="text" class="input_loginFitstir" @change="$emit('change',{'text':text})"/>
        </label>
    </div>


</template>

<script>
    export  default {
        name: "InputText",
        props: [
            'type', 'label'
        ],
        data : ()=>({
            text : null
        }),
        methods : {

        }


    }
</script>
<style lang="postcss">
    .input_loginFitstir{
        @apply bg-white border boder-gray-300 rounded p-2;
    }
</style>