<script>
    import * as Menubar from '../../../lib/components/ui/menubar';

    let bookmarks = false;
	let fullUrls = true;
	const profileRadioValue = 'benoit';
</script>

<Menubar.Root class="rounded-[0.5rem] border-b border-none px-2 lg:px-4">
    <Menubar.Menu>
		<Menubar.Trigger class="font-bold">3PS</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item>About Music</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item>
				Preferences... <Menubar.Shortcut>⌘,</Menubar.Shortcut>
			</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item>
				Hide Music... <Menubar.Shortcut>⌘H</Menubar.Shortcut>
			</Menubar.Item>
			<Menubar.Item>
				Hide Others... <Menubar.Shortcut>⇧⌘H</Menubar.Shortcut>
			</Menubar.Item>
			<Menubar.Shortcut />
			<Menubar.Item>
				Quit Music <Menubar.Shortcut>⌘Q</Menubar.Shortcut>
			</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
    <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
            <Menubar.Item>
                Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Item>
                Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Sub>
                <Menubar.SubTrigger>Find</Menubar.SubTrigger>
                <Menubar.SubContent>
                    <Menubar.Item>Search the web</Menubar.Item>
                    <Menubar.Separator />
                    <Menubar.Item>Find...</Menubar.Item>
                    <Menubar.Item>Find Next</Menubar.Item>
                    <Menubar.Item>Find Previous</Menubar.Item>
                </Menubar.SubContent>
            </Menubar.Sub>
            <Menubar.Separator />
            <Menubar.Item>Cut</Menubar.Item>
            <Menubar.Item>Copy</Menubar.Item>
            <Menubar.Item>Paste</Menubar.Item>
        </Menubar.Content>
    </Menubar.Menu>
    <Menubar.Menu>
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Content>
            <Menubar.CheckboxItem bind:checked={bookmarks}
                >Always Show Bookmarks Bar</Menubar.CheckboxItem
            >
            <Menubar.CheckboxItem bind:checked={fullUrls}>Always Show Full URLs</Menubar.CheckboxItem>
            <Menubar.Separator />
            <Menubar.Item inset>
                Reload <Menubar.Shortcut>⌘R</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Item inset>
                Force Reload <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item inset>Toggle Fullscreen</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item inset>Hide Sidebar</Menubar.Item>
        </Menubar.Content>
    </Menubar.Menu>
    <Menubar.Menu>
        <Menubar.Trigger>Profiles</Menubar.Trigger>
        <Menubar.Content>
            <Menubar.RadioGroup value={profileRadioValue}>
                <Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
                <Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
                <Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
            </Menubar.RadioGroup>
            <Menubar.Separator />
            <Menubar.Item inset>Edit...</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item inset>Add Profile...</Menubar.Item>
        </Menubar.Content>
    </Menubar.Menu>
</Menubar.Root>