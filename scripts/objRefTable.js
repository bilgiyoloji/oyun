const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.AJAX,
		C3.Plugins.Json,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Json.Exps.ArraySize,
		C3.Plugins.Json.Exps.Get,
		C3.Plugins.Button.Acts.SetText,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Json.Acts.Parse,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Acts.AddVar
	];
};
self.C3_JsPropNameTable = [
	{AJAX: 0},
	{JSON: 0},
	{txtSoru: 0},
	{txtPuan: 0},
	{btnA: 0},
	{btnB: 0},
	{btnC: 0},
	{btnD: 0},
	{puan: 0},
	{soruIndex: 0},
	{dogruCevap: 0}
];

self.InstanceType = {
	AJAX: class extends self.IInstance {},
	JSON: class extends self.IJSONInstance {},
	txtSoru: class extends self.ITextInstance {},
	txtPuan: class extends self.ITextInstance {},
	btnA: class extends self.IButtonInstance {},
	btnB: class extends self.IButtonInstance {},
	btnC: class extends self.IButtonInstance {},
	btnD: class extends self.IButtonInstance {}
}