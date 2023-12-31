const formData = new FormData();
formData.append('name', 'zerocho');
formData.append('item', 'orange');
formData.append('item', 'melon');
formData.has('money'); // true
formData.has('item'); // false
formData.get('item'); // orange
formData.getAll('item'); // ['orange', 'melon']
formData.append('test', ['hi', 'zero']);
formData.get('test'); // ['hi', 'zero']
formData.delete('test');
formData.get('test'); // null
formData.set('item', 'apple');
formData.getAll('item'); // ['apple']

(async () => {
    try {
        const formData = new formData();
        formData.append('name', 'zerocho');
        formData.append('birth', 1994);
        const result = await axios.get('https://www.zerocho.com/api/post/formdata', formData);
        console.log(result);
        console.log(result.data);
    } catch (error) {
        console.error(error);
    }
})();