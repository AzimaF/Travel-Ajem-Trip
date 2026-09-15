(function () {
    const usersKey = 'ajemtrip_users';
    const sessionKey = 'ajemtrip_current_user';
    const notificationsKey = 'ajemtrip_notifications';

    function users() {
        return JSON.parse(localStorage.getItem(usersKey) || '[]');
    }

    function saveUsers(value) {
        localStorage.setItem(usersKey, JSON.stringify(value));
    }

    function addNotification(message) {
        const items = JSON.parse(localStorage.getItem(notificationsKey) || '[]');
        items.unshift({ message, date: new Date().toLocaleString('id-ID'), read: false });
        localStorage.setItem(notificationsKey, JSON.stringify(items.slice(0, 20)));
    }

    window.AjemAuth = {
        currentUser() {
            const email = localStorage.getItem(sessionKey);
            return users().find((user) => user.email === email) || null;
        },
        register(user) {
            const list = users();
            if (list.some((item) => item.email === user.email)) {
                throw new Error('Email sudah terdaftar.');
            }
            list.push(user);
            saveUsers(list);
            localStorage.setItem(sessionKey, user.email);
            addNotification(`Selamat datang di AjemTrip, ${user.fullName}!`);
        },
        login(email, password, remember) {
            const user = users().find((item) => item.email === email && item.password === password);
            if (!user) throw new Error('Email atau password salah.');
            localStorage.setItem(sessionKey, user.email);
            if (remember) localStorage.setItem('ajemtrip_remember', 'true');
            addNotification(`Login berhasil pada ${new Date().toLocaleString('id-ID')}.`);
            return user;
        },
        updatePassword(email, password) {
            const list = users();
            const index = list.findIndex((item) => item.email === email);
            if (index < 0) throw new Error('Email belum terdaftar.');
            list[index].password = password;
            saveUsers(list);
            addNotification('Password akun berhasil diperbarui.');
        },
        notifications() {
            return JSON.parse(localStorage.getItem(notificationsKey) || '[]');
        },
        markNotificationsRead() {
            const items = this.notifications().map((item) => ({ ...item, read: true }));
            localStorage.setItem(notificationsKey, JSON.stringify(items));
        }
    };
})();
